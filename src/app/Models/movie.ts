export class Movie {
    id: any;
    name: string;
    earning: number;
    releaseDate: Date;
    userName: string;

    constructor(name?: string, earning?: number, releaseDate?: Date,userName?: string) {
      this.name = name || '';
      this.earning = earning || 0;
      this.releaseDate = releaseDate || new Date();
      this.userName = userName || 'Superadmin';
    }
  }
  