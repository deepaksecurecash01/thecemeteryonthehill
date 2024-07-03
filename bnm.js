<div className="relative w-full mb-5 xl:mb-5 group contact">
  <div className="mt-8 mb-4">
    <p className="font-roboto text-primary text-lg mb-2">
      Lease Holder Signature
    </p>
    <div className="border border-primary relative">
      <SignatureCanvas
        ref={signCanvas}
        penColor="black"
        onEnd={handleSignatureEnd}
        canvasProps={{
          width: 500,
          height: 200,
          className: "sigCanvas",
        }}
      />
      {signature && (
        <button
          type="button"
          className="absolute top-0 right-0 bg-white p-1"
          onClick={clearSignature}
        >
          <MdDelete className="text-red-500 text-lg" />
        </button>
      )}
    </div>
    {errors.signature && (
      <WarningPopup
        error={errors.signature.message}
        isFirstError={currentErrorField === "signature"}
      />
    )}
  </div>
</div>;


  const handleSignatureEnd = () => {
    const sigDataUrl = signCanvas.current.toDataURL();
    setSignature(sigDataUrl);
    setValue("signature", sigDataUrl, { shouldValidate: true });
  };

  const clearSignature = () => {
    signCanvas.current.clear();
    setSignature("");
    setValue("signature", "", { shouldValidate: true });
  };

   const onSubmit = async (data) => {
     if (!signature) {
       setSubmissionStatus("error");
       setErrorMessage("Lease Holder Signature is required");
       return;
     }
     data.signature = signature;
     console.log(data);

     try {
       // Simulate a form submission
       await new Promise((resolve, reject) => {
         // Change to resolve() for success simulation, reject() for error simulation
         setTimeout(resolve, 1000);
       });

       setSubmissionStatus("success");
       setErrorMessage("");
       reset(); // Reset form fields
     } catch (error) {
       setSubmissionStatus("error");
       setErrorMessage("Failed to submit the form. Please try again.");
     }
   };

   <span
     className={`${
       responseError ? "opacity-100" : "opacity-0"
     } transition-opacity ease-in-out delay-150 duration-300  `}
   >
     {responseError ? responseError.message : ""}
   </span>;