import  Configuration from "@/models/ConfigurationSchema";

const generateNewLeaseNumber = async () => {
  try {
    // Fetch the lease number configuration entry
    let leaseConfig = await Configuration.findOne({
      Name: "LeaseNumber",
    }).lean();

    // If LeaseNumber does not exist, initialize it with COTH011
    if (!leaseConfig) {
      const initialLeaseNumber = "COTH011";

      // Insert the initial value into the configuration
      leaseConfig = new Configuration({
        Name: "LeaseNumber",
        Value: initialLeaseNumber,
      });

      // Save the configuration entry
      await leaseConfig.save();

      return initialLeaseNumber; // Return the initialized lease number
    }

    // Extract the prefix (first 4 characters) and numeric part
    const prefix = "COTH";
    const currentNumber = parseInt(leaseConfig.Value.slice(4));

    // Increment the numeric part by 1
    const newNumber = currentNumber + 1;

    // Generate the new lease number, padded to 3 digits (e.g., COTH011)
    const newLease = `${prefix}${newNumber.toString().padStart(3, "0")}`;

    // Update the new lease number in the Configuration model
    await Configuration.updateOne({ Name: "LeaseNumber" }, { Value: newLease });

    return newLease; // Return the newly generated lease number
  } catch (error) {
    console.error("Error generating new lease number:", error);
    throw error;
  }
};

export default generateNewLeaseNumber;
