import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ContactBanner = () => {
  return (
    <section className="mt-10">
      <div className="">
        <div className=" bg-[#0099ff] px-6 py-10 text-white md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-2xl font-bold md:text-3xl">
                We are here to help.
              </h2>
              <p className="mt-2 text-sm text-white/90 md:text-base">
                Our team is ready to assist you with any queries or support you
                need. Reach out today and get a quick response.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0099ff] transition hover:bg-white/90"
              >
                Talk to support
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
