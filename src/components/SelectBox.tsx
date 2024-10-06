import * as Select from "@radix-ui/react-select";
import { HiCheck, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

export const SelectBox = ({
  placeholder,
  items,
  selected,
  onChange,
}: {
  placeholder: string;
  items: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Select.Root defaultValue={selected} onValueChange={onChange}>
      <Select.Trigger
        className="flex h-[35px] items-center justify-center gap-[5px] rounded bg-black px-[15px] text-[15px] leading-none text-violet-200 shadow-[0_2px_10px] shadow-black/10 outline-none transition-all duration-200 hover:bg-violet-800 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet-300"
        aria-label="Food"
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="text-violet-200">
          <HiOutlineChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md bg-black shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-black text-violet-200">
            <HiOutlineChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Item
              value="0"
              className={
                "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[15px] leading-none text-violet-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-800 data-[disabled]:text-violet-900 data-[highlighted]:text-violet-100 data-[highlighted]:outline-none"
              }
            >
              <Select.ItemText>All users</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <HiCheck />
              </Select.ItemIndicator>
            </Select.Item>
            {items.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                className={
                  "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[15px] leading-none text-violet-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-800 data-[disabled]:text-violet-700 data-[highlighted]:text-violet-100 data-[highlighted]:outline-none"
                }
              >
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                  <HiCheck />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-black text-violet-200">
            <HiOutlineChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
