# Lifecycle of a single instance

## Organiser PoV

- A new group lobby can be created
    - Asks for group name and organiser's profile data (name and gender)
    - Generates the lobby and provides the organiser with an invite link to their profile
- If lobby is not visited by organiser in 15 minutes, it is deleted
    - ...or by anyone besides the organiser in 24 hours
- Organiser may create profiles for others in the group
- Organiser may delete profiles of others
- Organiser has access to profiles' invite codes
- Votes are locked and tallied automatically after 7 days, or manually by the org
- Lobby persists for 7 days after vote tally

## Basic user PoV

- On following an invite link, user is authenticated automatically
    - This and following functionality is available to group organiser as well
- JWT is stored in user's device for automatic auth later
    - May be a member of different groups but not have two profiles in the same group
- User may mark 2 profiles (even those not claimed yet) as First and Second pick
- Before the tally, those picks may be changed at any time
- User may delete themselves from the group (though mothing stops the org for creating their profile again)

## Vote tally

- 2 points for every 1st Pick a user received
- 1 point for every 2nd Pick
- 3 points for every Mutual Pick
    - Mutual Picks are only awarded to users who picked 2 people, otherwise 1st or 2nd pick is awarded as appropriate
- Total picks of each type are displayed separately for each gender
- Same-gender attraction inferrence is displayed for both genders


## DB schema

- group
    - id
    - created_at
    - tallied_at
    - delete_threshold (0/1/2 for no org visit/no others visit/normal)
    - name
    - avatar

- user
    - id
    - group_id
    - name
    - gender
    - invite_code (only exposed in an invite link)
    - is_admin
    - has_claimed
    - avatar

- pick
    - sender_id
    - receiver_id
    - pick_type

### Queries

- Create group
    - create new group
    - create new user with is_admin and group_id
    - generate and send invite link

- Delete expired groups swipe
    - delete all groups where created_at >15min ago with delete_threshold 0
    - ... created_at >24h ago with delete_threshold 1
    - ... tallied_at >7d ago with delete_threshold 2
    - set tallied_at to now where created_at >7d ago and tallied_at is null
    - cascade users from deleted groups

- User is deleted
    - delete user
    - cascade likes both where user is sender_id and where user is receiver_id

- User follows an invite link or has code in storage
    - if code/link is valid (user found), display matching group

- User submits votes
    - delete any votes where user is sender_id
    - add new votes

- Tally votes for user
    - count picks where user is receiver_id
    - count picks where user is sender_id (to check mutual pick requirement)

- Tally votes total
    - tally votes for each user
    - count users for whom gender matches 1 or 2 picks
    - send vote data without exposing sender_ids

## App structure

- Home page
    - Create new group...
    - (If user code found in storage, route to group)
- Group route (invite link)
    - (Query for group. If exists, display and save code in storage)
    - (If group expired, route to error)
    - Settings:
        - (admin only) Manage group...
        - Upload avatar
        - Delete profile
    - Select boys/girls
    - User list, sorted alphabetically (after tally by score):
        - avatar
        - name
        - when not tallied, whether they're your current first/second pick (local state before submit only!)
        - when tallied, their total hearts
        - total score
    - (before tally) Submit button
    - (after tally) Statistics
- Manage group view
    - Add new person...
    - User list:
        - Get invite link
        - Delete user
    - Tally votes