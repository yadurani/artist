const icons = {
  back: {
    width: 8,
    height: 14,
    viewBox: '0 0 8 14',
    paths: [
      'M7,14c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L2.4,7l5.3,5.3c0.4,0.4,0.4,1,0,1.4C7.5,13.9,7.3,14,7,14z',
    ],
  },
  next: {
    width: 8,
    height: 14,
    viewBox: '0 0 8 14',
    paths: [
      'M1,14c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4L5.6,7L0.3,1.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C1.5,13.9,1.3,14,1,14z',
    ],
  },
  playFill: {
    width: 16,
    height: 20,
    viewBox: '0 0 16 20',
    paths: [
      'M15.5,9.2l-14-9c-0.3-0.2-0.7-0.2-1,0C0.2,0.3,0,0.6,0,1v18c0,0.4,0.2,0.7,0.5,0.9C0.7,20,0.8,20,1,20c0.2,0,0.4-0.1,0.5-0.2l14-9c0.3-0.2,0.5-0.5,0.5-0.8S15.8,9.3,15.5,9.2z',
    ],
  },
  playOutline: {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    paths: [
      'M5,22c-0.2,0-0.3,0-0.5-0.1C4.2,21.7,4,21.4,4,21V3c0-0.4,0.2-0.7,0.5-0.9c0.3-0.2,0.7-0.2,1,0l14,9c0.3,0.2,0.5,0.5,0.5,0.8s-0.2,0.7-0.5,0.8l-14,9C5.4,21.9,5.2,22,5,22z M6,4.8v14.3L17.2,12L6,4.8z',
    ],
  },
  pause: {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    paths: ['M10,4H6v16h4V4z', 'M18,4h-4v16h4V4z'],
  },
  volume: {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    paths: [
      'M11,20c-0.2,0-0.4-0.1-0.6-0.2L5.6,16H2c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h3.6l4.7-3.8c0.3-0.2,0.7-0.3,1.1-0.1C11.8,4.3,12,4.6,12,5v14c0,0.4-0.2,0.7-0.6,0.9C11.3,20,11.1,20,11,20z M3,14h3c0.2,0,0.4,0.1,0.6,0.2l3.4,2.7V7.1L6.6,9.8C6.4,9.9,6.2,10,6,10H3V14z',
      'M19.1,20.1c-0.1,0-0.3,0-0.4-0.1c-0.4-0.2-0.6-0.5-0.6-0.9V4.9c0-0.4,0.2-0.8,0.6-0.9c0.4-0.2,0.8-0.1,1.1,0.2C21.9,6.3,23,9.1,23,12c0,2.9-1.1,5.7-3.2,7.8C19.6,20,19.3,20.1,19.1,20.1z M20.1,8v8c0.6-1.2,0.9-2.6,0.9-4C21,10.6,20.7,9.2,20.1,8z M15.5,16.5c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0.8-0.8,1.2-1.8,1.2-2.8s-0.4-2.1-1.2-2.8c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0C17.4,8.9,18,10.4,18,12c0,1.6-0.6,3.1-1.8,4.2C16.1,16.4,15.8,16.5,15.5,16.5z',
    ],
  },
  mute: {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    paths: [
      'M11,20c-0.2,0-0.4-0.1-0.6-0.2L5.6,16H2c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h3.6l4.7-3.8c0.3-0.2,0.7-0.3,1.1-0.1C11.8,4.3,12,4.6,12,5v14c0,0.4-0.2,0.7-0.6,0.9C11.3,20,11.1,20,11,20z M3,14h3c0.2,0,0.4,0.1,0.6,0.2l3.4,2.7V7.1L6.6,9.8C6.4,9.9,6.2,10,6,10H3V14z',
      'M19.1,12l2-2c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-2,2l-2-2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l2,2l-2,2c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2-2l2,2c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L19.1,12z',
    ],
  },
  frame: {
    width: 40,
    height: 20,
    viewBox: '0 0 40 20',
    paths: [
      'M0.3,4.3 0.1,4.3 0.1,4.6 0.1,19.8 0.1,20 0.3,20 3.2,20 3.4,20 3.4,19.8 3.4,4.6 3.4,4.3 3.2,4.3',
      'M6,13.8 5.8,13.8 5.8,14.1 5.8,19.8 5.8,20 6,20 8.9,20 9.1,20 9.1,19.8 9.1,14.1 9.1,13.8 8.9,13.8',
      'M11.7,2.4 11.5,2.4 11.5,2.6 11.5,19.8 11.5,20 11.7,20 14.6,20 14.8,20 14.8,19.8 14.8,2.6 14.8,2.4 14.6,2.4',
      'M17.4,6.2 17.2,6.2 17.2,6.5 17.2,19.8 17.2,20 17.4,20 20.3,20 20.6,20 20.6,19.8 20.6,6.5 20.6,6.2 20.3,6.2',
      'M23.2,0.5 22.9,0.5 22.9,0.7 22.9,19.8 22.9,20 23.2,20 26,20 26.3,20 26.3,19.8 26.3,0.7 26.3,0.5 26,0.5',
      'M31.7,5.3 28.9,5.3 28.6,5.3 28.6,5.5 28.6,19.8 28.6,20 28.9,20 31.7,20 32,20 32,19.8 32,5.5 32,5.3',
    ],
  },
}

export default icons
