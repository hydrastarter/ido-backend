import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResponse } from '../interfaces';

@Injectable()
export class GlobalHttpResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IApiResponse<any>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    return next.handle().pipe(
      map((data) => {
        if (data && data.status) {
          context.switchToHttp().getResponse().status(data.status);
        }
        return {
          success: data.success,
          status: data.status || response.statusCode,
          message: data.message,
          data: data.data,
          error: data.error,
          decryptedData: data.decryptedData,
        };
      }),
    );
  }
}
