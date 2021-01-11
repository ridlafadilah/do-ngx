import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
export class ErrorHandlerService {
    handleError(error) {
        if (error.message) {
            if (error.message.includes('No loader found for file')) {
                // this.notification.show('DICOM', 'File Not Support', NbComponentStatus.DANGER);
                return EMPTY;
            }
            else if (error.message.includes('mousedown') || error.message.includes('mousemove') ||
                error.message.includes('mouseup') || error.message.includes('mouseout') ||
                error.message.includes('mousewheel') || error.message.includes('DOMMouseScroll') ||
                error.message.includes('dblclick') || error.message.includes('touchstart') ||
                error.message.includes('touchmove') || error.message.includes('touchend')) {
                return EMPTY;
            }
        }
        throw error;
    }
}
ErrorHandlerService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lcnJvci1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUc3QixNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7Z0JBQ3RELGlGQUFpRjtnQkFDakYsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTSxJQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFRLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDOUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQVUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUM3RSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDbkYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQVMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO2dCQUMvRSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBUSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDekYsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsTUFBTSxLQUFLLENBQUM7SUFDZCxDQUFDOzs7WUFqQkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdObyBsb2FkZXIgZm91bmQgZm9yIGZpbGUnKSkge1xuICAgICAgICAvLyB0aGlzLm5vdGlmaWNhdGlvbi5zaG93KCdESUNPTScsICdGaWxlIE5vdCBTdXBwb3J0JywgTmJDb21wb25lbnRTdGF0dXMuREFOR0VSKTtcbiAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgfSBlbHNlIGlmICggZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbW91c2Vkb3duJykgICAgIHx8IGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ21vdXNlbW92ZScpIHx8XG4gICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdtb3VzZXVwJykgICAgICAgfHwgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbW91c2VvdXQnKSB8fFxuICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbW91c2V3aGVlbCcpICAgIHx8IGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0RPTU1vdXNlU2Nyb2xsJykgfHxcbiAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ2RibGNsaWNrJykgICAgICB8fCBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd0b3VjaHN0YXJ0JykgfHxcbiAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3RvdWNobW92ZScpICAgICB8fCBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd0b3VjaGVuZCcpKSB7XG4gICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxufVxuIl19