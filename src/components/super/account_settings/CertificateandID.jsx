import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import CertificateModal from "../CertificateModal";

const CertificateandID = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  return (
    <>
      <div className="flex justify-start gap-40 ml-2">
        <div className="flex gap-1">
          <div className="">
            <IoEyeSharp size={32} />
          </div>
          <div className="text-1xl items-center py-1">
            Certificate
            <span className="hover:text-[#7367f0] ml-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  setIsWalletOpen(true); // Open modal
                }}
              >
                (Click Here to View Certificate)
              </a>
            </span>
            {isWalletOpen && (
              <CertificateModal onClose={() => setIsWalletOpen(false)} />
            )}
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <div>
              <IoEyeSharp size={32} />
            </div>
            <div className="text-1xl items-center py-1">
              ID Card
              <span className="hover:text-[#7367f0] ml-1">
                <a href=""
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  setIsWalletOpen(true); // Open modal
                }}>
                  (Click Here to View ID Card){" "}
                </a>
              </span>
               {isWalletOpen && (
              <CertificateModal onClose={() => setIsWalletOpen(false)} />
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateandID;
