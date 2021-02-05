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
                <FormControl id="firstname" >
                    <FormLabel>First Name</FormLabel>
                                
                        <Input   
                            placeholder='First Name'       
                            value={data.firstName}
                            name='firstname'
                            // onChange={(event) => handleChange(event)}
                        />
                </FormControl>

                <FormControl id="lastname" >
                    <FormLabel>Last Name</FormLabel>
                                
                        <Input   
                            placeholder='Last Name'       
                            value={data.lastName}
                            name='lastname'
                            // onChange={(event) => handleChange(event)}
                        />
                </FormControl>

                <FormControl id="tel" >
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
