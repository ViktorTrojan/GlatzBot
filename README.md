# GlatzBot
### Description
GlatzBot was developed to run on the Raspberry Pi 4. Main Feature is to show the Local-IP of the Pi because it can be quite a tedious task to find out

### ❗Don't forget to change the DiscordBot Token in src/config.json❗
 
### Installation For Linux
#### Install NodeJs with:
- curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
- sudo apt-get install -y nodejs
#### Install NPM packages with:
- npm i discord.js
- npm i enmap

#### Auto-Startup with Crontab
- $ crontab -e
- @reboot npm start --prefix <location>/GlatzBot
- change <location> with the Directory Path to the Project(e.g /home/pi/Documents)
