package lk.ijse.dep11.todo.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/tasks")
//@CrossOrigin(origins = {"http://localhost:5500"})
@CrossOrigin
public class TaskHttpController {
}
