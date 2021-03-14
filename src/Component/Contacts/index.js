import React from "react";
import style from "./style.module.css";
import cn from "classnames";
export default function Contacts() {
  return (
    <div className={cn(style.card, style.transition)}>
      <h2 className={cn(style.h2, style.transition)}>Makhmutova Aleksandra</h2>
      <p className={style.contactsText}>
      phone: 8 913 385 68 72
      aleksandraMakhmutova@gmail.com
      @makhmutovaWebDev
      </p>
      <div className={cn(style.cardCircle, style.transition)}></div>
    </div>
  );
}
