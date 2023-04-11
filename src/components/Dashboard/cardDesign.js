import React, { useEffect, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment/moment';
import { enqueueSnackbar } from 'notistack';
const CardDesign = () => {
  const [userData, setUserData] = useState(null)
  const fetchUser = async () => {

    try {
      await axios.get(window["runConfig"].GET_URL).then(response => {
        if (response.status === 200) {
          if (response.data !== undefined) {
            if (response.data.results.length) {
              let data = {
                "name": response.data.results[0].name.title + ". " + response.data.results[0].name.first + " " + response.data.results[0].name.last,
                "dob": moment(response.data.results[0].dob.date).format("Do MMMM YYYY"),
                "age": response.data.results[0].dob.age,
                "email": response.data.results[0].email,
                "cell": response.data.results[0].phone,
                "image": response.data.results[0].picture.large
              };
              setUserData(data)
              localStorage.setItem("user", data.name)
              localStorage.setItem("User email", data.email)
            }
          }
        }
        else {
          enqueueSnackbar("", {
            variant: 'error'
          })
        }
      })
    } catch (error) {

      enqueueSnackbar(error.message, {
        variant: 'error'
      })


    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <> {userData != null ? <Card variant="outlined" sx={{ width: 320 }} className="card-design">
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5, fontWeight: 600 }} >
        {userData.name}
      </Typography>
      <Typography level="body2">{userData.email}</Typography>
      <Button
        aria-label="bookmark Bahamas Islands"
        // variant="plain"

        onClick={fetchUser}
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.9rem', right: '0.5rem', cursor: "pointer" }}
      >
        <RefreshIcon className='hover-design' />
      </Button>
      <AspectRatio style={{ margin: "7%" }} >
        <img
          src={userData.image}
          srcSet={userData.image}
          loading="lazy"
          alt={userData.name}
          className='element'
        />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3" sx={{ fontWeight: 600 }}>{userData.cell}</Typography>
          {/* <Typography level="body3" style={{fontSize:"0.7em"}}>{userData.dob}</Typography> */}

        </div>
        <Typography

          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontSize: "0.9em" }}
        >
          {userData.dob + " ( " + userData.age + " yrs )"}
        </Typography>

      </Box>

    </Card> : <Typography sx={{ display: "block", margin: "auto", position: 'absolute', top: '40%', right: '45%', }}><h1>No Users</h1></Typography>}</>
  );
}
export default CardDesign;