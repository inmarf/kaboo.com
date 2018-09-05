# FRONT-END

**Feature:** Claim reward  
  As a user  
  I want to claim a reward  

**Scenario 1:** Claimed reward logged previously  
**Given** the user previously logged with the correct 'user' 'password'  
**And** the user is on the page where can get a reward  
**When** the user claim a reward  
**Then** The user can see the section "Your history" where there is a new reward in the correct order  

**Scenario 2:** Claimed reward without logged
**Given** the user is in the page where can claim a reward  
**And** the user is not logged  
**When** the user claim a reward  
**Then** The user can see the login page  
**And** insert a correct 'user' 'password'  
**And** the user can see the history list  
**And** the reward is in the list  

**Scenario 3:** Claimed reward with wrong credentials    
**Given** the user is in the page where can claim a reward  
**And** the user is not logged  
**When** the user claim a reward  
**And** The user can see the login page  
**And** insert an incorrect 'user' 'password'  
**Then** the user can see the login page error  

**Scenario 4:** Claimed reward with wrong logging  
**Given** the user is in the page where can claim a reward  
**And** the user is not logged  
**When** the user claim a reward  
**Then** The user can see the login page  
**And** insert an incorrect user/password  
**And** the user can see the login page error  

**Scenario 5:** Claimed reward failed not to get the new reward  
**Given** the user previously logged with the correct 'user' 'password'  
**And** the user is on the page where can get a reward  
**When** the user claims a reward  
**Then** Some internal error happened and show error message in the page  
**And** Claim the reward again  
**And** Show the history section without your reward in the list  

**Scenario 6:** Claimed reward and the user has 8 rewards  
**Given** the user previously logged with the correct 'user' 'password'  
**And** the user is on the page where can get a reward  
**When** the user claims a reward  
**Then** the user sees the history list with 8 rewards and the last one on the list  

**Scenario 7:** Claimed the same reward more than one time with less than 8 rewards  
**Given** the user previously logged with the correct 'user' 'password'  
**And** the user is on the page where can get a reward  
**When** the user claims a reward  
**Then** the user can see the history list with the last reward twice in chronological order  

# BACK-END

I don't know with kind of API is, but in case there is an online API.

**Scenario 1:** Call the reward history with a valid username
**When**  API call to  igc/betspin/rewards/history is made with 'user' with value 'validUser'
**Then** request status Code should be 200
**And** request Content-Type should be application/json
**And** Valid reward history response

**Scenario 2:** Call the reward history with no valid username
**When**  API call to  igc/betspin/rewards/history is made with 'user' with value 'incorrectUser'
**Then** request status Code should be 404

**Sceneario 3:** Call de reward history with a valid username  
**When**  API call to  igc/betspin/rewards/history is made with 'user' with value 'validUser'  
**Then** request status Code should be 200  
**And** request Content-Type should be application/json  
**And** Valid reward history response  
**And** The response not contains duplicated items in the list and the re-claimed shoul contain a list  

# Things not covered

- I don't have clear how is the login working, I've supposed typical behavior in my examples. For example, what should happen is when I claim a reward the session has been expired.
- In the page with the rewards, in the image:
	- I can't see the date, so I can't know if the rewards are in correct order.
	- I can't see the reward's information, I don't have clear how I can access to them.
	- What happens if I have a lot of rewards? Only I can see the last 8? And if the last 8 are the same, how I know if I have other different? (Is it the page paginated?)
- In case of errors when you claim a rewards what happens? Can you see an error? Could you claim again the reward?
- There is no example of the JSON.
- How is the structure of the JSON if there is only one reward? Is it show as a item in the subarray of the only one element in the list?
- It's not clear what kind of API is and the structure of the response. What happens if I add to the API call more than one parameter? it his run fine? Ignore all the parameters after the first?
