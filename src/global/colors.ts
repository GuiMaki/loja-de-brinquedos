const colors = {
  primary: {
    100: '#D8A5FF',
    80: '#E0B7FF',
    60: '#E8C9FF',
    40: '#EFDBFF',
    20: '#F7EDFF',
  },
  secondary: {
    100: '#351B89',
    80: '#5D49A1',
    60: '#8676B8',
    40: '#AEA4D0',
    20: '#D7D1E7',
  },
  neutral: {
    black: '#000000',
    100: '#1C1C1E',
    80: '#454545',
    60: '#737373',
    40: '#A2A2A2',
    20: '#D1D0D0',
    white: '#FFFFFF',
    background: '#F1F1F1',
  },
  alert: {
    success: { primary: '#2DAC3E', secondary: '#ABDEB1' },
    error: { primary: '#DE3737', secondary: '#FFD2D2' },
    warning: { primary: '#E1CF36', secondary: '#FFFACB' },
  },
} as const;
export default colors;
