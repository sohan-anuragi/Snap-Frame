import companyLogo1 from "../../../assets/CompanyLogo/CompanyLogo1.png";
import companyLogo2 from "../../../assets/CompanyLogo/CompanyLogo2.png";

export default function CompanyLogo() {
  return (
    <>
      <a href="/" className="lg:hidden">
        <img
          src={companyLogo1}
          alt="Company Logo"
          className="w-[160px] h-[50px] object-contain cursor-pointer ml-[0.5rem]"
        />
      </a>
      <a href="/" className="hidden lg:inline-block">
        <img
          src={companyLogo2}
          alt="Company Logo"
          className="w-[180px] h-[60px] object-contain cursor-pointer ml-[0.5rem]"
        />
      </a>
    </>
  );
}
