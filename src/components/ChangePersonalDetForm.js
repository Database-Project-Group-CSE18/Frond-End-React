import {
    Box,
    FormControl,
    FormLabel,
    Input,
  } from "@chakra-ui/react";


const ChangePersonalDetForm = ({data}) => {
    return (
        <Box>
            <form>
                <FormControl id="firstname" mb='8'>
                    <FormLabel>First Name</FormLabel>
                                
                        <Input   
                            placeholder='First Name'       
                            value={data.firstName}
                            name='firstname'
                            // onChange={(event) => handleChange(event)}
                        />
                </FormControl>

                <FormControl id="lastname" mb='8'>
                    <FormLabel>Last Name</FormLabel>
                                
                        <Input   
                            placeholder='Last Name'       
                            value={data.lastName}
                            name='lastname'
                            // onChange={(event) => handleChange(event)}
                        />
                </FormControl>

                <FormControl id="tel" mb='8'>
                    <FormLabel>Telephone Number</FormLabel>
                                
                        <Input   
                            placeholder='Telephone Number'       
                            value={data.tp}
                            name='telephone'
                            // onChange={(event) => handleChange(event)}
                        />
                </FormControl>

                <Input mt='2' mb='2'  type="submit" value='Update Details' className='btn btn-block' bg="teal.600" color='white'  />
                            





            </form>
        </Box>
    )
}

export default ChangePersonalDetForm
