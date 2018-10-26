import { Component, OnInit, SecurityContext, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-foundation';
import { TabsetComponent } from 'ngx-foundation';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})

export class DemoComponent implements OnInit {
  myForm: FormGroup;
  dismissible = true;
  isCollapsed = true;
  isDropup = true;
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  message: string;
  showBoundaryLinks = true;
  maxSize = 5;
  rotate = true;
  bigTotalItems = 200;
  bigCurrentPage = 1;
  max = 10;
  rate = 0;
  overStar: number;
  isReadonly = false;
  percent: number;
  mytime: Date = new Date();
  showMin = true;
  showSec = true;
  tooltipHtml = `<h6>Dynamic HTML Content within a tooltip.</h6> <span class="button small">Tooltip Button</span>`;
  tooltipContent = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  dynamic: number;
  type: string;
  isOffcanvas = true;

  // Sortable Items List
  itemStringsLeft = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Green Lantern'
  ];

  itemStringsRight = [
    'Flash',
    'Aquaman',
    'Martian Manhunter',
    'Green Arrow'
  ];

  // Dynamic Callouts (Alerts)
  alerts: any = [
    {
      type: 'primary',
      msg: `<h5>This is a dynamic primary callout that is closeable</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="/demo">It's dangerous to go alone, take this.</a>`
    },
    {
      type: 'success',
      msg: `<h5>This is a dynamic success callout that is closeable</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="/demo">It's dangerous to go alone, take this.</a>`
    },
    {
      type: 'warning',
      msg: `<h5>This is a dynamic warning callout that is closeable</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="/demo">It's dangerous to go alone, take this.</a>`
    },
    {
      type: 'alert',
      msg: `<h5>This is a dynamic alert callout that is closeable</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="/demo">It's dangerous to go alone, take this.</a>`
    }
  ];

  // Dynamic Orbit (Carousel)
  myInterval = 3000;
  activeSlideIndex = 0;

  slides: any = [
    {
      src: 'https://baconmockup.com/400/170',
      alt: `Bacon`,
      caption: `Slide Bacon`
    },
    {
      src: 'https://baconmockup.com/401/170',
      alt: `Bacon`,
      caption: `Slide More Bacon`
    },
    {
      src: 'https://baconmockup.com/402/170',
      alt: `Bacon`,
      caption: `Slide Even More Bacon`
    }
  ];

  // Typeahead Module States List
  selected: string;
  noResult = false;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  constructor(private formBuilder: FormBuilder, sanitizer: DomSanitizer, private modalService: BsModalService) {
    this.alerts = this.alerts.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));

    this.slides = this.slides.map((slide: any) => ({
      src: slide.src,
      alt: slide.alt,
      caption: sanitizer.sanitize(SecurityContext.HTML, slide.caption)
    }));

    this.random();
  }

  // Tabs
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  disableEnableTab() {
    this.staticTabs.tabs[3].disabled = !this.staticTabs.tabs[3].disabled;
  }

  // Alerts
  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  // Progressbars
  random(): void {
    const value = Math.floor(Math.random() * 100 + 1);
    let type: string;

    if (value < 50) {
      type = 'alert';
    } else if (value < 70) {
      type = 'warning';
    } else {
      type = 'success';
    }

    this.dynamic = value;
    this.type = type;
  }

  // Ratings
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  resetStarsCTA() {
    this.rate = 0;
    this.isReadonly = false;
  }

  // Reveal (Modal)
  openReveal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'small'});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  openReveal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'large' });
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  // Typeahead Component
  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }

  // ngOnInit for Button Groups
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      left: false,
      middle: true,
      right: false
    });
  }
}
