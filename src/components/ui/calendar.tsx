"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 w-[280px]", className)}
      classNames={{
        months: "flex flex-col space-y-2",
        month: "space-y-2",
        caption: "flex justify-center pt-1 relative items-center px-6",
        caption_label: "text-sm font-semibold",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-6 w-6 p-0 opacity-70 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse",
        head_row: "flex w-full justify-between",
        head_cell: "w-8 h-6 flex items-center justify-center text-[10px] font-medium text-slate-400",
        row: "flex w-full justify-between mt-1",
        cell: cn(
          "w-8 h-8 p-0 text-center text-sm relative",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal text-sm hover:bg-sky-100 hover:text-sky-600 aria-selected:opacity-100 rounded-full"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-sky-500 text-white hover:bg-sky-500 hover:text-white",
        day_today: "bg-slate-100 text-slate-900 font-semibold",
        day_outside: "text-slate-300",
        day_disabled: "text-slate-300 opacity-50",
        day_range_middle: "aria-selected:bg-sky-100 aria-selected:text-sky-600",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
