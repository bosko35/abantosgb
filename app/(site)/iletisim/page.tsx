import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      {/* Offset for fixed navbar */}
      <div className="pt-28 md:pt-36">
        {/* Reuse the existing contact section as a full page */}
        <Contact />
      </div>
    </>
  );
}
