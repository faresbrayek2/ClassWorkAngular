import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('HighlightDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({});
    elementRef = testBed.inject(ElementRef);
    renderer = testBed.inject(Renderer2);
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
