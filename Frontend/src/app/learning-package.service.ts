import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface LearningPackageDTO {
  id: number;
  title: string;
  description?: string;
  category: string;
  targetAudience?: string;
  difficulty: number;
  created_at: Date;
  updated_at: Date;
}

export class LearningPackageModel {
  constructor(private dto: LearningPackageDTO) {
    Object.assign(this, dto);
  }
}

@Injectable({
  providedIn: 'root',
})

export class LearningPackageService {
  private apiUrl = 'http://localhost:3000/api/learning-packages'; // Update with your API URL

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<LearningPackageDTO[]> {
    return this.http.get<LearningPackageDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<LearningPackageDTO> {
    return this.http.get<LearningPackageDTO>(`${this.apiUrl}/${id}`);
  }

  create(packageData: LearningPackageDTO): Observable<LearningPackageDTO> {
    return this.http.post<LearningPackageDTO>(this.apiUrl, packageData);
  }

  update(id: number, packageData: LearningPackageDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, packageData);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllModel(): Observable<LearningPackageModel[]> {
    return this.http
      .get<LearningPackageDTO[]>(this.apiUrl)
      .pipe(map(dtoArray => dtoArray.map(dto => new LearningPackageModel(dto))));
  }

  getByIdModel(id: number): Observable<LearningPackageModel> {
    return this.http
      .get<LearningPackageDTO>(`${this.apiUrl}/${id}`)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  createModel(packageData: LearningPackageDTO): Observable<LearningPackageModel> {
    return this.http
      .post<LearningPackageDTO>(this.apiUrl, packageData)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  updateModel(id: number, packageData: LearningPackageDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, packageData);
  }

  deleteModel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllApi(): Observable<LearningPackageModel[]> {
    return this.http
      .get<LearningPackageDTO[]>(this.apiUrl)
      .pipe(map(dtoArray => dtoArray.map(dto => new LearningPackageModel(dto))));
  }

  getByIdApi(id: number): Observable<LearningPackageModel> {
    return this.http
      .get<LearningPackageDTO>(`${this.apiUrl}/${id}`)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  createApi(packageData: LearningPackageDTO): Observable<LearningPackageModel> {
    return this.http
      .post<LearningPackageDTO>(this.apiUrl, packageData)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  updateApi(id: number, packageData: LearningPackageDTO): Observable<void> {
    return this.http
      .put<void>(`${this.apiUrl}/${id}`, packageData)
      .pipe(map(() => {
      }));  // No DTO to map, just a void response
  }

  deleteApi(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(map(() => {
      }));  // No DTO to map, just a void response
  }

}
