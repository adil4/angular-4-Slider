import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {
  translateY: string = 'translateY(0px)';
   infi : boolean = false;
  slides: any[] = [
    { active: true, color: 'grey' },
    { active: false, color: 'green' },
    { active: false, color: 'blue' },
    { active: false, color: 'yellow' },
    { active: false, color: 'red' },
      ]
  constructor() { }
  getPos() {
    return this.slides.findIndex(slide => slide.active);
  }
  setTranslateY() {
    this.translateY = `translateY(-${this.getPos() * 200}px)`
  }
  go(slide){
    let currentSlide = this.slides[this.getPos()]
    currentSlide.active = false
    slide.active = true;
    this.setTranslateY()
  }
  next() {
    let currentSlide = this.slides[this.getPos()]
    let nextSlide = this.slides[this.getPos() + 1]
    if (nextSlide) {
      currentSlide.active = false
      nextSlide.active = true
    }
    if(!nextSlide && this.infi){
      let next = this.slides[this.getPos() *0]
      console.log('next',next)
       currentSlide.active = false
      next.active = true
    }
    
    this.setTranslateY()
  }
  previous() {
    let currentSlide = this.slides[this.getPos()]
    let previousSlide = this.slides[this.getPos() - 1]
    if (previousSlide) {
      currentSlide.active = false
      previousSlide.active = true
    }
     if(!previousSlide && this.infi){
       let preLenght = this.slides.length -1;
      let previous = this.slides[this.getPos()+preLenght]
       currentSlide.active = false
      previous.active = true
    }
    this.setTranslateY()
  }
infinite(){
  console.log('infinite function called',)
this.infi = !this.infi
}
}
