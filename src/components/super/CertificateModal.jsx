import React from "react";
import { IoClose } from "react-icons/io5";

const CertificateModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white  rounded-lg w-96 shadow-lg">
        {/* Header */}
        <div className="flex justify-between   px-4 py-3 rounded-t-lg h-[80vh]">
          <h1 className="text-lg font-semibold">Certificate</h1>
          <button
            onClick={onClose}
            className=" fixed right-115 text-lg font-bold cursor-pointer "
          >
            <IoClose  size={30}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;

{
  /* // <div className='fixed w-50 m-2 p-2 flex items-center justify-center bg-black/50 ' >
    //   <h1>
    //     Certificate
    //   </h1>      
    //    <button
    //         onClick={onClose}
    //         className=" text-lg font-bold cursor-pointer"
    //       >
    //         ×
    //       </button>
      
    // </div> */
}
