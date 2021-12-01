import type { FunctionComponent } from "react";

const Rating: FunctionComponent<{
  numberOfStarsToShow: 0 | 1 | 2 | 3 | 4 | 5;
  buyers: number;
}> = ({ numberOfStarsToShow, buyers }) => {
  const YellowStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="#F96800"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  );

  const GreyStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="#aaa"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  );

  const Stars = [];

  for (let count = 1; count <= 5; count++) {
    if (count <= numberOfStarsToShow) {
      Stars.push(<YellowStar key={count} />);
    } else {
      Stars.push(<GreyStar key={count} />);
    }
  }

  return (
    <div className="flex items-center">
      {Stars}
      <span className="pl-1 text-[14px] text-[#F96800] font-medium">
        {`(${buyers > 1000 ? `${Math.ceil(buyers / 1000)}k` : buyers})`}
      </span>
    </div>
  );
};

export default Rating;
export { Rating };
