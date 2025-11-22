import Link from "next/link";

interface IngredCardProps {
  name: string;
  image: string;
  category: string;
  use: string;
  feature: string;
  description: string;
  iupacName: string;
  commonName: string;
  href?: string;
}

export default function IngredCard({
  name,
  image,
  category,
  use,
  feature,
  description,
  iupacName,
  commonName,
  href,
}: IngredCardProps) {
  const cardContent = (
    <div className="group [perspective:1000px] w-full h-64 cursor-pointer">
      <div
        className="
          relative h-full w-full text-center transition-all duration-700 
          [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* FRONT SIDE */}
        <div
          className="
            absolute inset-0 bg-white border rounded-xl shadow-md p-4 
            flex flex-col items-center justify-center
            [backface-visibility:hidden]
          "
        >
          <img src={image} alt={name} className="w-20 h-20 object-contain mb-3" />

          <br />

          {/* Ingredient Name */}
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>

          {/* IUPAC Name BELOW the ingredient name */}
          <p className="text-sm text-black mt-1">
            <span className="font-semibold">IUPAC / Scientific Name:</span> {iupacName}
          </p>
        </div>

        {/* BACK SIDE */}
        <div
          className="
            absolute inset-0 bg-teal-100 border rounded-xl shadow-md p-4 
            [transform:rotateY(180deg)] [backface-visibility:hidden]
            flex flex-col items-start justify-center text-left
          "
        >
          <p>
            <span className="font-semibold text-black">Category:</span>{" "}
            <span className="text-black">{category}</span>
          </p>

          <p>
            <span className="font-semibold text-black">Use:</span>{" "}
            <span className="text-black">{use}</span>
          </p>

          <p>
            <span className="font-semibold text-black">Feature:</span>{" "}
            <span className="text-black">{feature}</span>
          </p>

          <p className="text-sm mt-2 text-black">{description}</p>
        </div>
      </div>
    </div>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
}
