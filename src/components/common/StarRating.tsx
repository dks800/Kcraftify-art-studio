import { FaStar } from "react-icons/fa";

interface Props {
  rating: number; // out of 5
}

const StarRating = ({ rating }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={16}
          className={`${
            star <= rating
              ? "text-[#D4AF37] fill-[#D4AF37]" // gold filled
              : "text-gray-600 opacity-60" // empty/gray
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;