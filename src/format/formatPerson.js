export const formatDetailTarget = (code) => {
  let target = '';
  switch (code) {
    case '010':
      target = '정상 아동(18세 미만)';
      break;
    case '020':
      target = '가출인';
      break;
    case '040':
      target = '시설보호 무연고자';
      break;
    case '060':
      target = '지적장애인';
      break;
    case '061':
      target = '지적장애인(18세 미만)';
      break;
    case '062':
      target = '지적장애인(18세 이상)';
      break;
    case '070':
      target = '치매질환자';
      break;
    case '080':
      target = '불상(기타)';
      break;
    default:
      target = '불상(기타)';
      break;
  }
  return target;
};

export const formatTarget = (code) => {
  let target = '';
  switch (code) {
    case '010':
      target = '아동';
      break;
    case '020':
      target = '가출';
      break;
    case '040':
      target = '무연고자';
      break;
    case '060':
    case '061':
    case '062':
      target = '장애';
      break;
    case '070':
      target = '치매';
      break;
    case '080':
      target = '불상';
      break;
    default:
      target = '불상';
      break;
  }
  return target;
};

export const formatColor = (code) => {
  let color = '';
  switch (code) {
    case '010':
      color = '#F7C6E7';
      break;
    case '020':
      color = '#FFC3A0';
      break;
    case '040':
      color = '#A1DAB4';
      break;
    case '060':
    case '061':
    case '062':
      color = '#AEC9F5';
      break;
    case '070':
      color = '#FFFFA6';
      break;
    case '080':
      color = '#D0B4D6';
      break;
    default:
      color = '#E4E4E4';
      break;
  }
  return color;
};
