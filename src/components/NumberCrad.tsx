export const NumberCrad = (props: { number: number }) => {
  return (
    <div className="rounded-[5px] w-12 h-12 number-card flex justify-center items-center text-[22px] font-medium font-poppins">
      {props.number.toString().length === 1 ? `0${props.number}` : props.number}
    </div>
  );
};
