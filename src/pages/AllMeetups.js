import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
  const [isloading,setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    fetch('https://react-getting-started-de17a-default-rtdb.firebaseio.com/meetups.json')
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      const meetups=[];
      for(let key in data){
        let meetup={          
          id:key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    })
  },[]);

  if(isloading){
    return <div>
      <p>Loading...</p>
    </div>
  }
  return <div>
    <h1>All Meetups Page</h1>
    <MeetupList meetups={loadedMeetups} />
  </div>;
}

export default AllMeetupsPage;