import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const Header = () => {
  return (
    <div className="bg-black flex justify-center items-center h-12">
    <div className="bg-black text-white max-w-[99%] w-full md:w-[90%] flex justify-between items-center text-center">
      <div className="pl-7">Call us: 866-440-0177</div>
      <div className="flex space-x-4">
        <span>Shipping is free for all orders!</span>
        <span>90 Days Money Back Guarantee</span>
      </div>
      <div className="flex items-center text-[#FFB634] space-x-1">
        <LocalShippingIcon fontSize="small" />
        <span>Track my order</span>
      </div>
    </div>
  </div>
  
    
  );
}
