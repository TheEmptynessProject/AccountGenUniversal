# Account Generator UserScript
Are you tired of spam emails? Worried about your privacy? Well... You're welcome!

## Overview
The Account Generator UserScript automates secure and unique account credential creation for websites, simplifying the registration process by generating temporary email addresses, usernames, and passwords.

## Features
**Automatic Password Generation**: When a password input is detected on a webpage, the script generates a strong and random password for enhanced security.

**Temporary Email Address Generation**: The script uses the **1secmail** API to generate a disposable email address, ensuring user privacy during the account creation process.

**Clipboard Integration**: The generated account details (email, username, and password) are copied to the clipboard, making it easy for users to paste the information during the registration process.

**Email Alert**: The script waits until an email is received at the generated email address and alerts the user. It provides a seamless way to monitor and verify account-related emails.

## How to Use
1. Install a UserScript manager for your browser (e.g., Tampermonkey, Greasemonkey).
2. Add the Account Generator script to your UserScript manager.
3. Visit a website with an account registration form.
4. The script will automatically generate and copy account details to the clipboard.
5. The script waits for an email to be sent to the generated email. It then opens a popup if it is allowed, if not, it logs the email to the console as a assurance, though it is not very readable and sets your clipboard to the url where you can see the email like normal (just open a new tab and paste it!).
6. Done

## Customization
Adjust the password length by modifying the passLen variable in the script.
Customize the list of first and second names for username generation to suit your preferences.

## License
This project is licensed under the MIT License.
