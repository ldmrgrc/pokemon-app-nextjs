const capitalizeTitle = (word: string) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  export default {
    capitalizeTitle
  }
  