<h1>Password Generator</h1>

<hr>

This password generator was created with several functions that are called when the buttons are clicked.

The Generate Password button calls the following functions:
  <ul>
  <li>resetPass</li>
  <li>userSelectType</li>
  <li>addChoices</li>
  <li>writePassword</li>
    <ul>
      <li>generatePassword</li>
    </ul>
  </ul>
 <br>
 
 The Copy Password button calls the following function:
  <ul>
    <li>copyPass</li>
  </ul>
 
  <hr>
  
  <h2>Other Info</h2>
<ul>
  <li>Within the userSelectType function, the user is able to select the number of characters between 8 and 128. If they user selects less than 8 or more than 128 an alert is    sent to enter the correct values, and it ends the script. If the user selects between 8 and 128 but does not select a character type they will get an alert to select at least one type, and it ends the script.</li><br>
  <li>All types confrimed will be pulled from their arrays and added to a new array via .concat in the addChoices function.<br>
Within generatePassword, a for loop is used with math.random to randomly select the confirmed characters from the new aray and then the password is written to the box via writePassword function.</li><br>
  <li>The resetPass fucntion resets variables so a new password will be displayed each time the button is clicked, instead of just adding it to the last password generated.</li><br>
  <li>The copyPass fucntion allows used to copy password to the clipboard via pulling the text from the password id. An alert will let the user know the password has been copied for use.</li><br>
 </ul>
