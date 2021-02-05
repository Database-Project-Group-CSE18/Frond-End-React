import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, IconButton, Box } from "@chakra-ui/react";

function SearchBar(props) {
    return (
        <Box w='500px'> 
            <InputGroup>
                <InputRightElement>
                    <IconButton colorScheme='gray' aria-label="Search database" icon={<SearchIcon />} />
                </InputRightElement>

                <Input placeholder={props.text} name='search' value={props.value} onChange={props.onChange} />

            </InputGroup>

        </Box>


    );
}

export default SearchBar;