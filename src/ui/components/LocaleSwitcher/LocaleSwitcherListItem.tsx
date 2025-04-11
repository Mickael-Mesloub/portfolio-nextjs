import { cn } from "@/utils/cn";
import { Check } from "lucide-react";
import { Locale } from "next-intl";

interface LocaleSwitcherListItemProps {
  value: Locale;
  title: string;
  currentLocale: Locale;
  onChangeLanguage: (locale: Locale) => void;
}

const LocaleSwitcherListItem: React.FC<LocaleSwitcherListItemProps> = ({
  value,
  title,
  currentLocale,
  onChangeLanguage,
}) => {
  const isSelectedLanguage = currentLocale === value;
  const className = cn(
    "flex justify-between items-center gap-1 whitespace-nowrap p-1 text-sm rounded-md hover:bg-txtBase hover:text-bgBase"
  );

  // TODO: Handle keyboard accessibility (onKeyDown)

  return (
    <li
      role="menuitem"
      className={className}
      onClick={() => onChangeLanguage(value)}
      tabIndex={0}
    >
      {title}
      {isSelectedLanguage && (
        <span>
          <Check />
        </span>
      )}
    </li>
  );
};

export default LocaleSwitcherListItem;
