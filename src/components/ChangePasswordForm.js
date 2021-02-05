import {
    Box,
    Input,
    FormControl,
    FormLabel,

  } from "@chakra-ui/react";


const ChangePasswordForm = ({trigger}) => {
    return (
        <Box>
              <form>
                <FormControl id="oldpword" mb='5'>
                    <FormLabel>Old Password</FormLabel>        
                        <Input   
                            placeholder='Old Password'       
                            name='oldpword'
                            type='password'
                            // onChange={(event) => handleChange(event)}
                            />
                </FormControl>

                <FormControl id="newpword" mb='5'>
                    <FormLabel>New Password</FormLabel>        
                        <Input   
                            placeholder='New Password'       
                            name='newpword'
                            type='password'
                            // onChange={(event) => handleChange(event)}
                            />
                </FormControl>

                <FormControl id="confnewpword" mb='5'>
                    <FormLabel>Confirm New Password</FormLabel>        
                        <Input   
                            placeholder='Confirm New Password'       
                            name='confnewpword'
                            type='password'
                            // onChange={(event) => handleChange(event)}
                            />
                </FormControl>

                <Input mt='2' mb='5'  type="submit" value='Update Password' className='btn btn-block' bg="teal.600" color='white'  onClick={trigger}/>
                
              </form>
        </Box>
    )
}

export default ChangePasswordForm
