import { Check } from "lucide-react";
import { Locale } from "next-intl";

interface LocaleSwitcherListItemProps {
  value: Locale;
  title: string;
  currentLocale: Locale;
  onChangeLanguage: (locale: Locale) => void;
  closeMenu: () => void;
}

const LocaleSwitcherListItem: React.FC<LocaleSwitcherListItemProps> = ({
  value,
  title,
  currentLocale,
  onChangeLanguage,
  closeMenu,
}) => {
  const isSelectedLanguage = currentLocale === value;

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChangeLanguage(value);
    closeMenu();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();

    const key = e.key;

    if (key === "Enter" || key === " ") {
      e.preventDefault();

      onChangeLanguage(value);
      closeMenu();
    }

    if (key === "Escape") {
      closeMenu();
    }
  };

  return (
    <li
      role="menuitem"
      className="flex justify-between font-raleway uppercase font-semibold items-center gap-1 whitespace-nowrap p-1 text-sm rounded-md hover:bg-txtBase hover:text-bgBase"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={onKeyDown}
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
