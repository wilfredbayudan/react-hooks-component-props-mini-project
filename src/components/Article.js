import React from "react";

const Article = ({title, date="January 1, 1970", preview, minutes}) => {
  function renderEmoji(minutes) {
    if (minutes < 30) {
      const emojiCount = Math.ceil(minutes/5);
      const emoji = '☕️';
      let renderEmoji = '';
      for (let i = 0; i < emojiCount; i++) {
        renderEmoji+= emoji;
      }
      return renderEmoji;
    } else {
      const emojiCount = Math.ceil(minutes/10);
      const emoji = '🍱';
      let renderEmoji = '';
      for (let i = 0; i < emojiCount; i++) {
        renderEmoji+= emoji;
      }
      return renderEmoji;    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {renderEmoji(minutes)}{minutes} min read
    </article>
  )
};

export default Article;