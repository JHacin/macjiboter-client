import { FC } from "react";
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/input";
import { CloseButton, FormControl, FormLabel, Icon } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

interface CatListSearchProps {
  value: string;
  setValue: (search: string) => void;
}

export const SearchInput: FC<CatListSearchProps> = ({ value, setValue }) => {
  return (
    <FormControl>
      <FormLabel>Iskanje po imenu</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <Icon as={MagnifyingGlass} weight="bold" color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Vnesi ime..."
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        {value && (
          <InputRightElement>
            <CloseButton
              onClick={() => {
                setValue("");
              }}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};
