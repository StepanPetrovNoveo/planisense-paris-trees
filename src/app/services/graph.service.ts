import {Injectable} from '@angular/core';
import {ItemInterface} from '../models/item.model'

const defaultConfig = {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: "Genre Group",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: []
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}

@Injectable()
export class GraphService {
  defaultConfig = defaultConfig;

  public updateData(dataList: ItemInterface[]) {
    defaultConfig.data.labels = dataList.map(x => x.name);
    defaultConfig.data.datasets[0].data = dataList.map(x => x.count);
    return defaultConfig;
  }

}
