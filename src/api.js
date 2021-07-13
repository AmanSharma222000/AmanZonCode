//Base url
const base_url = "https://api.rawg.io/api/";
const key = "key=238202f8887143f3b49d4c833efe09f6";

//getting date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1 ;
    
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDay() + 1 ;
    
    if(day < 10){
        return `0${day}`;
    }else{
        return day;
    }
}

//Current day/month /year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear+1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10&${key}`;
const upcoming_games = `games?dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10&${key}`;
const new_games = `games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10&${key}`;

//console.log(gameDetailsUrl("573923"));
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
//GAME DETAILS
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?${key}`;
//GAME SCREENSHOTS
export const gameScreenshotsUrl = (game_id) => `${base_url}games/${game_id}/screenshots?${key}`;
//SEARCHED GAME
export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=9&${key}`;