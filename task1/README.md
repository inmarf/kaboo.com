# FRONT-END

1. Claims Rewards logged correctly previously (Sucess case)
1.1 Logged in the page with correct user/password
1.2 Click on claim rewards
1.3 User can see the section "Your history" where it is the new reward and the correct history list the (last 8 rewards in chronological order).

2. Claims Rewards logging after the logging (Sucess case)
2.1 Click on claim rewards (without logged)
2.2 Show the login page.
2.3 Enter a correct user/password
2.4 User can see the section "Your history" where it is the new reward and the correct history list the (last 8 rewards in chronological order).

3. Claims Rewards logging fails (Error case)
3.1 Enter to the login section page 
3.2 Show the login page
3.3 Enter user/password wrong
3.4 Show error login

4. Claims reward fails not get the new reward (Error case)
4.1 Logged in the page with correct user/password
4.2 Click on claim rewards
4.3 Some internal error happened and show error message in the page.
4.4 Claim the reward again.
4.5 Show the history section without your reward in the list.

5. Claims reward in incorrect order (Error case)
5.1 Logged in the page with correct user/password
5.2 Click on claim rewards
5.3 Claim the reward.
5.4 History list shows with the last one rewards in the incorrect order.

6. Claim rewards and the user has 8 rewards. (Sucess case)
6.1 Logged in the page with correct user/password
6.2 Click on claim rewards
6.3 Claim the reward.
6.4 Show the history list with 8 rewards and the last one on the list.

7. Claim the same reward more than one time with less than 8 rewards (Sucess case)
7.1 Logged in the page with correct user/password
7.2 Click on claim rewards
7.3 Claim the reward.
7.4 Show the history list with the last reward twice in chronological order.

# BACK-END

I don't know with kind of API is, but in case there is an online API.

1. Call de reward history with a valid username.
1.1. Call the API: igc/betspin/rewards/history <valid_user>
1.2 Response:
- Status Code: 200
- Content-Type: application/json
- Valid reward history response. 

2. Call de reward history with a valid username.
2.1. Call the API: igc/betspin/rewards/history <incorrect_user>
2.2 Response:
- Status Code: 404

3. Call de reward history with a valid username.
3.1. Call the API: igc/betspin/rewards/history <valid_user>
3.2 Response:
- Status Code: 200
- Content-Type: application/json
- Valid reward history response. The response not contains duplicated items in the list and the re-claimed should contain a list.

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
