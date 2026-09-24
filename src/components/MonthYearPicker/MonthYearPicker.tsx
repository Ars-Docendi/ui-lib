import { useState } from "react";
import { cx } from "../../utils/cx";
import { Input } from "../Input";
import { Select } from "../Select";

const MONTHS = [
  { value: "01", label: "ene" },
  { value: "02", label: "feb" },
  { value: "03", label: "mar" },
  { value: "04", label: "abr" },
  { value: "05", label: "may" },
  { value: "06", label: "jun" },
  { value: "07", label: "jul" },
  { value: "08", label: "ago" },
  { value: "09", label: "sep" },
  { value: "10", label: "oct" },
  { value: "11", label: "nov" },
  { value: "12", label: "dic" },
] as const;

export interface MonthYearChangeDetail {
  /** A month is selected but the year is still empty (the month is kept, not emitted). */
  missingYear: boolean;
}

export interface MonthYearPickerProps {
  /** "YYYY", "YYYY-MM" or "" when empty. The month is optional. */
  value: string;
  onChange: (value: string, detail: MonthYearChangeDetail) => void;
  disabled?: boolean;
  invalid?: boolean;
  /** Base accessible label; the controls get "Mes de …" / "Año de …". */
  "aria-label"?: string;
  className?: string;
}

function split(value: string): [string, string] {
  const [year = "", month = ""] = value.split("-");
  return [year, month];
}

export function MonthYearPicker({
  value,
  onChange,
  disabled,
  invalid,
  "aria-label": ariaLabel = "fecha",
  className,
}: MonthYearPickerProps) {
  const [year, valueMonth] = split(value);
  // Month chosen before the year: kept here until there is a year to compose with.
  const [pendingMonth, setPendingMonth] = useState("");
  const month = year || disabled ? valueMonth : pendingMonth;
  const base = ariaLabel.toLowerCase();

  function emit(nextYear: string, nextMonth: string) {
    if (!nextYear) {
      setPendingMonth(nextMonth);
      onChange("", { missingYear: Boolean(nextMonth) });
      return;
    }
    setPendingMonth("");
    onChange(nextMonth ? `${nextYear}-${nextMonth}` : nextYear, { missingYear: false });
  }

  return (
    <div className={cx("adoc-monthyear", className)}>
      <Select
        value={month}
        aria-label={`Mes de ${base}`}
        disabled={disabled}
        invalid={invalid}
        onChange={(e) => emit(year, e.target.value)}
      >
        <option value="">Mes</option>
        {MONTHS.map((m) => (
          <option value={m.value} key={m.value}>
            {m.label}
          </option>
        ))}
      </Select>
      <Input
        value={year}
        inputMode="numeric"
        maxLength={4}
        placeholder="Año"
        aria-label={`Año de ${base}`}
        disabled={disabled}
        invalid={invalid}
        onChange={(e) => emit(e.target.value.replace(/\D/g, ""), month)}
      />
    </div>
  );
}
