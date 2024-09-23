import { renderTabs, renderSlides } from "./view";
import { news } from "./model";

const tabButtons = document.querySelectorAll('.news__tab');

const initNews = (data) => {
  const onButtonClick = (event) => {
    news.currentTab = event.target.dataset.topic;
    renderTabs(news.currentTab);
    let currentData;
    if (news.currentTab == 'all') {
      currentData = data;
    } else {
      currentData = data.filter((slide) => {
        return slide.topic == news.currentTab;
      });
    }

  renderSlides(currentData);
}

tabButtons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
})

tabButtons[0].click();
}

export { initNews };
