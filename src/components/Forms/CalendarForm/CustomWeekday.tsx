interface CustomWeekdayProps {
  className?: string;
  weekday: number;
}

function CustomWeekday({ className, weekday }: CustomWeekdayProps) {
  const weekdayNameShort = ["일", "월", "화", "수", "목", "금", "토"][weekday];
  return <div className={className}>{weekdayNameShort}</div>;
}

export default CustomWeekday;
