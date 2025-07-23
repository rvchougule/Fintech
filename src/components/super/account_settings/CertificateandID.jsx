import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { SuperModal } from "../SuperModel";

const CertificateandID = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isIdOpen, setIsIdOpen] = useState(false);
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
                  setIsCertificateOpen(true); // Open modal
                }}
              >
                (Click Here to View Certificate)
              </a>
            </span>
            {isCertificateOpen && (
              <SuperModal onClose={() => setIsCertificateOpen(false)}>
                <div className="w-100 h-60">
                  <h1 className="text-lg font-semibold">Certificate</h1>
                </div>
              </SuperModal>
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
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault(); // Prevent page reload
                    setIsIdOpen(true); // Open modal
                  }}
                >
                  (Click Here to View ID Card){" "}
                </a>
              </span>
              {isIdOpen && (
                <SuperModal onClose={() => setIsIdOpen(false)}>
                  <div className="w-100 h-60">
                    <h1 className="text-lg font-semibold">ID Card</h1>
                  </div>
                </SuperModal>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateandID;
