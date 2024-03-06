import calendarIcon from "@/../public/assets/calendar_month.png";
import FormOuter from "@/components/FormOuter";
import Label from "@/components/Forms/Label";
import Icon from "@/components/Icon";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Control, Controller, FieldValues } from "react-hook-form";
import CustomCaption from "./CustomCaption";

interface CalendarFormProps {
  control: Control<FieldValues, any>;
}

function CalendarForm({ control }: CalendarFormProps) {
  return (
    <FormOuter>
      <div className="flex gap-x-1">
        <Icon src={calendarIcon} alt="alendar-icon" />
        <Label label="날짜를 선택해주세요." id="date" />
      </div>
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <DayPicker
            mode="single"
            selected={field.value}
            onSelect={(date) => field.onChange(date)}
            showOutsideDays
            className="border-0"
            classNames={{
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-1 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-base p-0 m-1 mb-2 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-neutral-40 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-primary-40 rounded-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-primary-100 text-white hover:bg-primary-60 hover:text-white focus:bg-primary-100 focus:text-white text-center",
              day_today: "text-primary-100",
              day_outside:
                "day-outside text-neutral-40 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10 cursor-not-allowed",
              day_disabled: "text-neutral-40 cursor-not-allowed",
              day_hidden: "invisible",
            }}
            components={{
              Caption: CustomCaption,
            }}
          />
        )}
      />
    </FormOuter>
  );
}

export default CalendarForm;
