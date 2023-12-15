package lk.ijse.dep11.todo.api;

import lk.ijse.dep11.todo.to.TaskTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/tasks")
@CrossOrigin
public class TaskHttpController {

    @Autowired
    private DataSource pool;


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = "application/json", consumes = "application/json")
    public TaskTO createTask(@RequestBody @Validated TaskTO task) {
        try (Connection connection = pool.getConnection()) {
            PreparedStatement stm = connection
                    .prepareStatement("INSERT INTO task (description, status, email) VALUES (?, FALSE, ?)",
                            Statement.RETURN_GENERATED_KEYS);
            stm.setString(1, task.getDescription());
            stm.setString(2, task.getEmail());
            stm.executeUpdate();
            ResultSet generatedKeys = stm.getGeneratedKeys();
            generatedKeys.next();
            int id = generatedKeys.getInt(1);
            task.setId(id);
            task.setStatus(false);
            return task;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping(value = "/{id}", consumes = "application/json")
    public void updateTask(@PathVariable int id,
                           @RequestBody @Validated(TaskTO.Update.class) TaskTO task){

    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable("id") int taskId){

    }

    @GetMapping(produces = "application/json", params = {"email"})
    public List<TaskTO> getAllTasks(String email) {
        return null;
    }
}
