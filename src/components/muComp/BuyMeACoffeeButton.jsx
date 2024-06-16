import Link from 'next/link';
import Image from 'next/image';

const BuyMeACoffeeButton = () => {
  return (
    <Link href="https://www.buymeacoffee.com/itzamanjain" target="_blank" rel="noopener noreferrer" className='m-5'>
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        width={217}
        height={200}
        alt="Buy Me A Coffee"
      />
    </Link>
  );
};

export default BuyMeACoffeeButton;

{/* <a href="https://www.buymeacoffee.com/itzamanjain" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a> */}