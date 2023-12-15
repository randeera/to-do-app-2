package lk.ijse.dep11.todo.api;

import lk.ijse.dep11.todo.to.TaskTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.*;

@RestController
@RequestMapping("/api/v1/tasks")
@CrossOrigin
public class TaskHttpController {

    @Autowired
    private DataSource pool;



}
