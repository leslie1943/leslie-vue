import CitySelect from './src/city-select';

/* istanbul ignore next */
CitySelect.install = function (Vue) {
  Vue.component(CitySelect.name, CitySelect);
};

export default CitySelect;
