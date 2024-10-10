import React from "react";

const Page = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style={{ padding: "12px" }}>
            <table
              align="left"
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="600"
              style={{ borderCollapse: "collapse" }}
            >
              {/* Header Section */}
              <tr>
                <td style={{ padding: "0 0 12px 0" }}>
                  <img
                    src="https://thecemeteryonthehill.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75"
                    alt="SecureCash Logo"
                    width={200}
                    height={60}
                  />
                </td>
                <td
                  valign="middle"
                  style={{
                    color: "#bbbbbb",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  Contact Form Submitted by {"Full Name"}
                </td>
              </tr>
              {/* Content Section */}
              <tr style={{ borderTop: "1px solid #dddddd" }}>
                <td
                  colSpan="2"
                  style={{
                    padding: "18px",
                    color: "#222222",
                    lineHeight: "160%",
                    textAlign: "left",
                  }}
                >
                  <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Contact Form Submitted by {"Full Name"}
                  </h1>
                  <p>
                    A website visitor submitted the following details through
                    the Contact Form of The Cemetery on the Hill:
                  </p>
                  <p>
                    Hi,
                    <br /> <br /> Thank you for enquiring about a SecureCash
                    Franchise! <br /> <br />
                    Your email has been received, and we will be in touch with
                    you shortly. <br /> <br /> Below is attached some reading
                    material for you to go through in the meantime, this
                    includes the ACCC Information Statement which needs to be
                    understood before proceeding. <br />
                    <br /> If we can be of any assistance in the meantime, then
                    please do not hesitate to call us on 1300 SECURE (1300 732
                    873), or simply reply to this email. <br />
                    <br /> Kind regards,
                    <br />
                    <br /> The SecureCash Franchise Team <br />
                    <br /> Email: franchise@securecash.com.au Phone: 1300 SECURE
                  </p>
                </td>
              </tr>
              {/* Footer Section */}
              <tr>
                <td colSpan="2" style={{ borderTop: "1px solid #dddddd" }}>
                  <table
                    align="left"
                    cellpadding="0"
                    cellspacing="0"
                    style={{ borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td
                        width="160"
                        style={{
                          padding: "12px",
                          color: "#222222",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src="https://thecemeteryonthehill.vercel.app/_next/image?url=%2Fimages%2Flogo-full.png&w=640&q=75"
                          width="160"
                          alt="SecureCash Logo"
                        />
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          color: "#222222",
                          textAlign: "left",
                        }}
                      >
                        <table style={{ borderCollapse: "collapse" }}>
                          <tr>
                            <td width="30">
                              <img
                                src="https://service.securecash.com.au/branded/email.png"
                                alt="Email"
                              />
                            </td>
                            <td>franchise@securecash.com.au</td>
                          </tr>
                          <tr>
                            <td width="30">
                              <img
                                src="https://service.securecash.com.au/branded/phone.png"
                                alt="Phone"
                              />
                            </td>
                            <td>1300 SECURE</td>
                          </tr>
                          <tr>
                            <td width="30">
                              <img
                                src="https://service.securecash.com.au/branded/website.png"
                                alt="Website"
                              />
                            </td>
                            <td>
                              <a
                                href="https://www.securecash.com.au/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                securecash.com.au
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              Take 30 seconds to{" "}
                              <a
                                href="https://www.securecash.com.au/performance/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                rate our performance
                              </a>
                              .
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              {/* Disclaimer Section */}
              <tr>
                <td
                  colSpan="2"
                  style={{
                    borderTop: "1px solid #dddddd",
                    textAlign: "center",
                    color: "#666666",
                    padding: "12px",
                  }}
                >
                  &copy; 2005 Sky Wallet Pty Ltd ABN 39 668 299 027 Trading
                  (Under License) as SecureCash.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Page;
